# `vpnIpsecTunnel` Submodule <a name="`vpnIpsecTunnel` Submodule" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnIpsecTunnel <a name="VpnIpsecTunnel" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel ionoscloud_vpn_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnel;

VpnIpsecTunnel.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .auth(VpnIpsecTunnelAuth)
    .cloudNetworkCidrs(java.util.List<java.lang.String>)
    .esp(IResolvable|java.util.List<VpnIpsecTunnelEsp>)
    .gatewayId(java.lang.String)
    .ike(VpnIpsecTunnelIke)
    .name(java.lang.String)
    .peerNetworkCidrs(java.util.List<java.lang.String>)
    .remoteHost(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(VpnIpsecTunnelTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.auth">auth</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.cloudNetworkCidrs">cloudNetworkCidrs</a></code> | <code>java.util.List<java.lang.String></code> | The network CIDRs on the "Left" side that are allowed to connect to the IPSec tunnel, i.e. the CIDRs within your IONOS Cloud LAN. Specify "0.0.0.0/0" or "::/0" for all addresses. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.esp">esp</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>></code> | esp block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | The ID of the IPSec Gateway that the tunnel belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.ike">ike</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | ike block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The human-readable name of your IPSec Gateway Tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.peerNetworkCidrs">peerNetworkCidrs</a></code> | <code>java.util.List<java.lang.String></code> | The network CIDRs on the "Right" side that are allowed to connect to the IPSec tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.remoteHost">remoteHost</a></code> | <code>java.lang.String</code> | The remote peer host fully qualified domain name or public IPV4 IP to connect to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The human-readable description of your IPSec Gateway Tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#id VpnIpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/fra/2, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.auth"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#auth VpnIpsecTunnel#auth}

---

##### `cloudNetworkCidrs`<sup>Required</sup> <a name="cloudNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.cloudNetworkCidrs"></a>

- *Type:* java.util.List<java.lang.String>

The network CIDRs on the "Left" side that are allowed to connect to the IPSec tunnel, i.e. the CIDRs within your IONOS Cloud LAN. Specify "0.0.0.0/0" or "::/0" for all addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#cloud_network_cidrs VpnIpsecTunnel#cloud_network_cidrs}

---

##### `esp`<sup>Required</sup> <a name="esp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.esp"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>>

esp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#esp VpnIpsecTunnel#esp}

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.gatewayId"></a>

- *Type:* java.lang.String

The ID of the IPSec Gateway that the tunnel belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#gateway_id VpnIpsecTunnel#gateway_id}

---

##### `ike`<sup>Required</sup> <a name="ike" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.ike"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

ike block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#ike VpnIpsecTunnel#ike}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The human-readable name of your IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#name VpnIpsecTunnel#name}

---

##### `peerNetworkCidrs`<sup>Required</sup> <a name="peerNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.peerNetworkCidrs"></a>

- *Type:* java.util.List<java.lang.String>

The network CIDRs on the "Right" side that are allowed to connect to the IPSec tunnel.

Specify "0.0.0.0/0" or "::/0" for all addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#peer_network_cidrs VpnIpsecTunnel#peer_network_cidrs}

---

##### `remoteHost`<sup>Required</sup> <a name="remoteHost" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.remoteHost"></a>

- *Type:* java.lang.String

The remote peer host fully qualified domain name or public IPV4 IP to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#remote_host VpnIpsecTunnel#remote_host}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The human-readable description of your IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#description VpnIpsecTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#id VpnIpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/fra/2, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#location VpnIpsecTunnel#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#timeouts VpnIpsecTunnel#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth">putAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp">putEsp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke">putIke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuth` <a name="putAuth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth"></a>

```java
public void putAuth(VpnIpsecTunnelAuth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---

##### `putEsp` <a name="putEsp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp"></a>

```java
public void putEsp(IResolvable|java.util.List<VpnIpsecTunnelEsp> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putEsp.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>>

---

##### `putIke` <a name="putIke" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke"></a>

```java
public void putIke(VpnIpsecTunnelIke value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putIke.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts"></a>

```java
public void putTimeouts(VpnIpsecTunnelTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpnIpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnel;

VpnIpsecTunnel.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnel;

VpnIpsecTunnel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnel;

VpnIpsecTunnel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnel;

VpnIpsecTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpnIpsecTunnel.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VpnIpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpnIpsecTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpnIpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VpnIpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference">VpnIpsecTunnelAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.esp">esp</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList">VpnIpsecTunnelEspList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ike">ike</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference">VpnIpsecTunnelIkeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference">VpnIpsecTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.authInput">authInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrsInput">cloudNetworkCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.espInput">espInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayIdInput">gatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ikeInput">ikeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrsInput">peerNetworkCidrsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHostInput">remoteHostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrs">cloudNetworkCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrs">peerNetworkCidrs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHost">remoteHost</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.auth"></a>

```java
public VpnIpsecTunnelAuthOutputReference getAuth();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference">VpnIpsecTunnelAuthOutputReference</a>

---

##### `esp`<sup>Required</sup> <a name="esp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.esp"></a>

```java
public VpnIpsecTunnelEspList getEsp();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList">VpnIpsecTunnelEspList</a>

---

##### `ike`<sup>Required</sup> <a name="ike" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ike"></a>

```java
public VpnIpsecTunnelIkeOutputReference getIke();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference">VpnIpsecTunnelIkeOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeouts"></a>

```java
public VpnIpsecTunnelTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference">VpnIpsecTunnelTimeoutsOutputReference</a>

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.authInput"></a>

```java
public VpnIpsecTunnelAuth getAuthInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---

##### `cloudNetworkCidrsInput`<sup>Optional</sup> <a name="cloudNetworkCidrsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrsInput"></a>

```java
public java.util.List<java.lang.String> getCloudNetworkCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `espInput`<sup>Optional</sup> <a name="espInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.espInput"></a>

```java
public IResolvable|java.util.List<VpnIpsecTunnelEsp> getEspInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>>

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayIdInput"></a>

```java
public java.lang.String getGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ikeInput`<sup>Optional</sup> <a name="ikeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.ikeInput"></a>

```java
public VpnIpsecTunnelIke getIkeInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `peerNetworkCidrsInput`<sup>Optional</sup> <a name="peerNetworkCidrsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrsInput"></a>

```java
public java.util.List<java.lang.String> getPeerNetworkCidrsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remoteHostInput`<sup>Optional</sup> <a name="remoteHostInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHostInput"></a>

```java
public java.lang.String getRemoteHostInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.timeoutsInput"></a>

```java
public IResolvable|VpnIpsecTunnelTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

---

##### `cloudNetworkCidrs`<sup>Required</sup> <a name="cloudNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.cloudNetworkCidrs"></a>

```java
public java.util.List<java.lang.String> getCloudNetworkCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `peerNetworkCidrs`<sup>Required</sup> <a name="peerNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.peerNetworkCidrs"></a>

```java
public java.util.List<java.lang.String> getPeerNetworkCidrs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `remoteHost`<sup>Required</sup> <a name="remoteHost" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.remoteHost"></a>

```java
public java.lang.String getRemoteHost();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpnIpsecTunnelAuth <a name="VpnIpsecTunnelAuth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnelAuth;

VpnIpsecTunnelAuth.builder()
//  .method(java.lang.String)
//  .pskKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.method">method</a></code> | <code>java.lang.String</code> | The Authentication Method to use for IPSec Authentication. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.pskKey">pskKey</a></code> | <code>java.lang.String</code> | The Pre-Shared Key to use for IPSec Authentication. Note: Required if method is PSK. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

The Authentication Method to use for IPSec Authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#method VpnIpsecTunnel#method}

---

##### `pskKey`<sup>Optional</sup> <a name="pskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth.property.pskKey"></a>

```java
public java.lang.String getPskKey();
```

- *Type:* java.lang.String

The Pre-Shared Key to use for IPSec Authentication. Note: Required if method is PSK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#psk_key VpnIpsecTunnel#psk_key}

---

### VpnIpsecTunnelConfig <a name="VpnIpsecTunnelConfig" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnelConfig;

VpnIpsecTunnelConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .auth(VpnIpsecTunnelAuth)
    .cloudNetworkCidrs(java.util.List<java.lang.String>)
    .esp(IResolvable|java.util.List<VpnIpsecTunnelEsp>)
    .gatewayId(java.lang.String)
    .ike(VpnIpsecTunnelIke)
    .name(java.lang.String)
    .peerNetworkCidrs(java.util.List<java.lang.String>)
    .remoteHost(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .timeouts(VpnIpsecTunnelTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.auth">auth</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.cloudNetworkCidrs">cloudNetworkCidrs</a></code> | <code>java.util.List<java.lang.String></code> | The network CIDRs on the "Left" side that are allowed to connect to the IPSec tunnel, i.e. the CIDRs within your IONOS Cloud LAN. Specify "0.0.0.0/0" or "::/0" for all addresses. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.esp">esp</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>></code> | esp block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | The ID of the IPSec Gateway that the tunnel belongs to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.ike">ike</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | ike block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.name">name</a></code> | <code>java.lang.String</code> | The human-readable name of your IPSec Gateway Tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.peerNetworkCidrs">peerNetworkCidrs</a></code> | <code>java.util.List<java.lang.String></code> | The network CIDRs on the "Right" side that are allowed to connect to the IPSec tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.remoteHost">remoteHost</a></code> | <code>java.lang.String</code> | The remote peer host fully qualified domain name or public IPV4 IP to connect to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.description">description</a></code> | <code>java.lang.String</code> | The human-readable description of your IPSec Gateway Tunnel. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#id VpnIpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/fra/2, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.auth"></a>

```java
public VpnIpsecTunnelAuth getAuth();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#auth VpnIpsecTunnel#auth}

---

##### `cloudNetworkCidrs`<sup>Required</sup> <a name="cloudNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.cloudNetworkCidrs"></a>

```java
public java.util.List<java.lang.String> getCloudNetworkCidrs();
```

- *Type:* java.util.List<java.lang.String>

The network CIDRs on the "Left" side that are allowed to connect to the IPSec tunnel, i.e. the CIDRs within your IONOS Cloud LAN. Specify "0.0.0.0/0" or "::/0" for all addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#cloud_network_cidrs VpnIpsecTunnel#cloud_network_cidrs}

---

##### `esp`<sup>Required</sup> <a name="esp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.esp"></a>

```java
public IResolvable|java.util.List<VpnIpsecTunnelEsp> getEsp();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>>

esp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#esp VpnIpsecTunnel#esp}

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

The ID of the IPSec Gateway that the tunnel belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#gateway_id VpnIpsecTunnel#gateway_id}

---

##### `ike`<sup>Required</sup> <a name="ike" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.ike"></a>

```java
public VpnIpsecTunnelIke getIke();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

ike block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#ike VpnIpsecTunnel#ike}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The human-readable name of your IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#name VpnIpsecTunnel#name}

---

##### `peerNetworkCidrs`<sup>Required</sup> <a name="peerNetworkCidrs" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.peerNetworkCidrs"></a>

```java
public java.util.List<java.lang.String> getPeerNetworkCidrs();
```

- *Type:* java.util.List<java.lang.String>

The network CIDRs on the "Right" side that are allowed to connect to the IPSec tunnel.

Specify "0.0.0.0/0" or "::/0" for all addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#peer_network_cidrs VpnIpsecTunnel#peer_network_cidrs}

---

##### `remoteHost`<sup>Required</sup> <a name="remoteHost" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.remoteHost"></a>

```java
public java.lang.String getRemoteHost();
```

- *Type:* java.lang.String

The remote peer host fully qualified domain name or public IPV4 IP to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#remote_host VpnIpsecTunnel#remote_host}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The human-readable description of your IPSec Gateway Tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#description VpnIpsecTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#id VpnIpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the IPSec Gateway Tunnel. Supported locations: de/fra, de/fra/2, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#location VpnIpsecTunnel#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelConfig.property.timeouts"></a>

```java
public VpnIpsecTunnelTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#timeouts VpnIpsecTunnel#timeouts}

---

### VpnIpsecTunnelEsp <a name="VpnIpsecTunnelEsp" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnelEsp;

VpnIpsecTunnelEsp.builder()
//  .diffieHellmanGroup(java.lang.String)
//  .encryptionAlgorithm(java.lang.String)
//  .integrityAlgorithm(java.lang.String)
//  .lifetime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.diffieHellmanGroup">diffieHellmanGroup</a></code> | <code>java.lang.String</code> | The Diffie-Hellman Group to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | The encryption algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>java.lang.String</code> | The integrity algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.lifetime">lifetime</a></code> | <code>java.lang.Number</code> | The phase lifetime in seconds. |

---

##### `diffieHellmanGroup`<sup>Optional</sup> <a name="diffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.diffieHellmanGroup"></a>

```java
public java.lang.String getDiffieHellmanGroup();
```

- *Type:* java.lang.String

The Diffie-Hellman Group to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#diffie_hellman_group VpnIpsecTunnel#diffie_hellman_group}

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

The encryption algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#encryption_algorithm VpnIpsecTunnel#encryption_algorithm}

---

##### `integrityAlgorithm`<sup>Optional</sup> <a name="integrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.integrityAlgorithm"></a>

```java
public java.lang.String getIntegrityAlgorithm();
```

- *Type:* java.lang.String

The integrity algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#integrity_algorithm VpnIpsecTunnel#integrity_algorithm}

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp.property.lifetime"></a>

```java
public java.lang.Number getLifetime();
```

- *Type:* java.lang.Number

The phase lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#lifetime VpnIpsecTunnel#lifetime}

---

### VpnIpsecTunnelIke <a name="VpnIpsecTunnelIke" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnelIke;

VpnIpsecTunnelIke.builder()
//  .diffieHellmanGroup(java.lang.String)
//  .encryptionAlgorithm(java.lang.String)
//  .integrityAlgorithm(java.lang.String)
//  .lifetime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.diffieHellmanGroup">diffieHellmanGroup</a></code> | <code>java.lang.String</code> | The Diffie-Hellman Group to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | The encryption algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>java.lang.String</code> | The integrity algorithm to use for IPSec Encryption. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.lifetime">lifetime</a></code> | <code>java.lang.Number</code> | The phase lifetime in seconds. |

---

##### `diffieHellmanGroup`<sup>Optional</sup> <a name="diffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.diffieHellmanGroup"></a>

```java
public java.lang.String getDiffieHellmanGroup();
```

- *Type:* java.lang.String

The Diffie-Hellman Group to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#diffie_hellman_group VpnIpsecTunnel#diffie_hellman_group}

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

The encryption algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#encryption_algorithm VpnIpsecTunnel#encryption_algorithm}

---

##### `integrityAlgorithm`<sup>Optional</sup> <a name="integrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.integrityAlgorithm"></a>

```java
public java.lang.String getIntegrityAlgorithm();
```

- *Type:* java.lang.String

The integrity algorithm to use for IPSec Encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#integrity_algorithm VpnIpsecTunnel#integrity_algorithm}

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke.property.lifetime"></a>

```java
public java.lang.Number getLifetime();
```

- *Type:* java.lang.Number

The phase lifetime in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#lifetime VpnIpsecTunnel#lifetime}

---

### VpnIpsecTunnelTimeouts <a name="VpnIpsecTunnelTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnelTimeouts;

VpnIpsecTunnelTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#create VpnIpsecTunnel#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#default VpnIpsecTunnel#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#delete VpnIpsecTunnel#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#update VpnIpsecTunnel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#create VpnIpsecTunnel#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#default VpnIpsecTunnel#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#delete VpnIpsecTunnel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.16/docs/resources/vpn_ipsec_tunnel#update VpnIpsecTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnIpsecTunnelAuthOutputReference <a name="VpnIpsecTunnelAuthOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnelAuthOutputReference;

new VpnIpsecTunnelAuthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetPskKey">resetPskKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPskKey` <a name="resetPskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.resetPskKey"></a>

```java
public void resetPskKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKeyInput">pskKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKey">pskKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `pskKeyInput`<sup>Optional</sup> <a name="pskKeyInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKeyInput"></a>

```java
public java.lang.String getPskKeyInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `pskKey`<sup>Required</sup> <a name="pskKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.pskKey"></a>

```java
public java.lang.String getPskKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuthOutputReference.property.internalValue"></a>

```java
public VpnIpsecTunnelAuth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelAuth">VpnIpsecTunnelAuth</a>

---


### VpnIpsecTunnelEspList <a name="VpnIpsecTunnelEspList" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnelEspList;

new VpnIpsecTunnelEspList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get"></a>

```java
public VpnIpsecTunnelEspOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VpnIpsecTunnelEsp> getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>>

---


### VpnIpsecTunnelEspOutputReference <a name="VpnIpsecTunnelEspOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnelEspOutputReference;

new VpnIpsecTunnelEspOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetDiffieHellmanGroup">resetDiffieHellmanGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetIntegrityAlgorithm">resetIntegrityAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiffieHellmanGroup` <a name="resetDiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetDiffieHellmanGroup"></a>

```java
public void resetDiffieHellmanGroup()
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetEncryptionAlgorithm"></a>

```java
public void resetEncryptionAlgorithm()
```

##### `resetIntegrityAlgorithm` <a name="resetIntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetIntegrityAlgorithm"></a>

```java
public void resetIntegrityAlgorithm()
```

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.resetLifetime"></a>

```java
public void resetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroupInput">diffieHellmanGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithmInput">integrityAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroup">diffieHellmanGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetime">lifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diffieHellmanGroupInput`<sup>Optional</sup> <a name="diffieHellmanGroupInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroupInput"></a>

```java
public java.lang.String getDiffieHellmanGroupInput();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithmInput"></a>

```java
public java.lang.String getEncryptionAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `integrityAlgorithmInput`<sup>Optional</sup> <a name="integrityAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithmInput"></a>

```java
public java.lang.String getIntegrityAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetimeInput"></a>

```java
public java.lang.Number getLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `diffieHellmanGroup`<sup>Required</sup> <a name="diffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.diffieHellmanGroup"></a>

```java
public java.lang.String getDiffieHellmanGroup();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `integrityAlgorithm`<sup>Required</sup> <a name="integrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.integrityAlgorithm"></a>

```java
public java.lang.String getIntegrityAlgorithm();
```

- *Type:* java.lang.String

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.lifetime"></a>

```java
public java.lang.Number getLifetime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEspOutputReference.property.internalValue"></a>

```java
public IResolvable|VpnIpsecTunnelEsp getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelEsp">VpnIpsecTunnelEsp</a>

---


### VpnIpsecTunnelIkeOutputReference <a name="VpnIpsecTunnelIkeOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnelIkeOutputReference;

new VpnIpsecTunnelIkeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetDiffieHellmanGroup">resetDiffieHellmanGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetIntegrityAlgorithm">resetIntegrityAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDiffieHellmanGroup` <a name="resetDiffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetDiffieHellmanGroup"></a>

```java
public void resetDiffieHellmanGroup()
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetEncryptionAlgorithm"></a>

```java
public void resetEncryptionAlgorithm()
```

##### `resetIntegrityAlgorithm` <a name="resetIntegrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetIntegrityAlgorithm"></a>

```java
public void resetIntegrityAlgorithm()
```

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.resetLifetime"></a>

```java
public void resetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroupInput">diffieHellmanGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithmInput">integrityAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroup">diffieHellmanGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithm">integrityAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetime">lifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `diffieHellmanGroupInput`<sup>Optional</sup> <a name="diffieHellmanGroupInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroupInput"></a>

```java
public java.lang.String getDiffieHellmanGroupInput();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithmInput"></a>

```java
public java.lang.String getEncryptionAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `integrityAlgorithmInput`<sup>Optional</sup> <a name="integrityAlgorithmInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithmInput"></a>

```java
public java.lang.String getIntegrityAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetimeInput"></a>

```java
public java.lang.Number getLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `diffieHellmanGroup`<sup>Required</sup> <a name="diffieHellmanGroup" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.diffieHellmanGroup"></a>

```java
public java.lang.String getDiffieHellmanGroup();
```

- *Type:* java.lang.String

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.encryptionAlgorithm"></a>

```java
public java.lang.String getEncryptionAlgorithm();
```

- *Type:* java.lang.String

---

##### `integrityAlgorithm`<sup>Required</sup> <a name="integrityAlgorithm" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.integrityAlgorithm"></a>

```java
public java.lang.String getIntegrityAlgorithm();
```

- *Type:* java.lang.String

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.lifetime"></a>

```java
public java.lang.Number getLifetime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIkeOutputReference.property.internalValue"></a>

```java
public VpnIpsecTunnelIke getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelIke">VpnIpsecTunnelIke</a>

---


### VpnIpsecTunnelTimeoutsOutputReference <a name="VpnIpsecTunnelTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_tunnel.VpnIpsecTunnelTimeoutsOutputReference;

new VpnIpsecTunnelTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VpnIpsecTunnelTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.vpnIpsecTunnel.VpnIpsecTunnelTimeouts">VpnIpsecTunnelTimeouts</a>

---



