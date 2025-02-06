# `vpnIpsecGateway` Submodule <a name="`vpnIpsecGateway` Submodule" id="@cdktf/provider-ionoscloud.vpnIpsecGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnIpsecGateway <a name="VpnIpsecGateway" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway ionoscloud_vpn_ipsec_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGateway;

VpnIpsecGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connections(IResolvable)
    .connections(java.util.List<VpnIpsecGatewayConnections>)
    .gatewayIp(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .maintenanceWindow(VpnIpsecGatewayMaintenanceWindow)
//  .tier(java.lang.String)
//  .timeouts(VpnIpsecGatewayTimeouts)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.connections">connections</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | Public IP address to be assigned to the gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The human readable name of your IPSecGateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The human-readable description of your IPSec Gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#id VpnIpsecGateway#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the IPSec Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow">VpnIpsecGatewayMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.tier">tier</a></code> | <code>java.lang.String</code> | Gateway performance options. See the documentation for the available options. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The IKE version that is permitted for the VPN tunnels. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.connections"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#connections VpnIpsecGateway#connections}

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.gatewayIp"></a>

- *Type:* java.lang.String

Public IP address to be assigned to the gateway.

Note: This must be an IP address in the same datacenter as the connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#gateway_ip VpnIpsecGateway#gateway_ip}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The human readable name of your IPSecGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#name VpnIpsecGateway#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The human-readable description of your IPSec Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#description VpnIpsecGateway#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#id VpnIpsecGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the IPSec Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#location VpnIpsecGateway#location}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow">VpnIpsecGatewayMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#maintenance_window VpnIpsecGateway#maintenance_window}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.tier"></a>

- *Type:* java.lang.String

Gateway performance options. See the documentation for the available options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#tier VpnIpsecGateway#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#timeouts VpnIpsecGateway#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The IKE version that is permitted for the VPN tunnels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#version VpnIpsecGateway#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnections` <a name="putConnections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putConnections"></a>

```java
public void putConnections(IResolvable OR java.util.List<VpnIpsecGatewayConnections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putConnections.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(VpnIpsecGatewayMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow">VpnIpsecGatewayMaintenanceWindow</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putTimeouts"></a>

```java
public void putTimeouts(VpnIpsecGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetTier"></a>

```java
public void resetTier()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpnIpsecGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGateway;

VpnIpsecGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGateway;

VpnIpsecGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGateway;

VpnIpsecGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGateway;

VpnIpsecGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VpnIpsecGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a VpnIpsecGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VpnIpsecGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VpnIpsecGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the VpnIpsecGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList">VpnIpsecGatewayConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference">VpnIpsecGatewayMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference">VpnIpsecGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connectionsInput">connectionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIpInput">gatewayIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow">VpnIpsecGatewayMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.tierInput">tierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connections"></a>

```java
public VpnIpsecGatewayConnectionsList getConnections();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList">VpnIpsecGatewayConnectionsList</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.maintenanceWindow"></a>

```java
public VpnIpsecGatewayMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference">VpnIpsecGatewayMaintenanceWindowOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeouts"></a>

```java
public VpnIpsecGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference">VpnIpsecGatewayTimeoutsOutputReference</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.connectionsInput"></a>

```java
public java.lang.Object getConnectionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `gatewayIpInput`<sup>Optional</sup> <a name="gatewayIpInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIpInput"></a>

```java
public java.lang.String getGatewayIpInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.maintenanceWindowInput"></a>

```java
public VpnIpsecGatewayMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow">VpnIpsecGatewayMaintenanceWindow</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.tierInput"></a>

```java
public java.lang.String getTierInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.gatewayIp"></a>

```java
public java.lang.String getGatewayIp();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpnIpsecGatewayConfig <a name="VpnIpsecGatewayConfig" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGatewayConfig;

VpnIpsecGatewayConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .connections(IResolvable)
    .connections(java.util.List<VpnIpsecGatewayConnections>)
    .gatewayIp(java.lang.String)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .maintenanceWindow(VpnIpsecGatewayMaintenanceWindow)
//  .tier(java.lang.String)
//  .timeouts(VpnIpsecGatewayTimeouts)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connections">connections</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.gatewayIp">gatewayIp</a></code> | <code>java.lang.String</code> | Public IP address to be assigned to the gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | The human readable name of your IPSecGateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.description">description</a></code> | <code>java.lang.String</code> | The human-readable description of your IPSec Gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#id VpnIpsecGateway#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the IPSec Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow">VpnIpsecGatewayMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.tier">tier</a></code> | <code>java.lang.String</code> | Gateway performance options. See the documentation for the available options. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.version">version</a></code> | <code>java.lang.String</code> | The IKE version that is permitted for the VPN tunnels. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.connections"></a>

```java
public java.lang.Object getConnections();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#connections VpnIpsecGateway#connections}

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.gatewayIp"></a>

```java
public java.lang.String getGatewayIp();
```

- *Type:* java.lang.String

Public IP address to be assigned to the gateway.

Note: This must be an IP address in the same datacenter as the connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#gateway_ip VpnIpsecGateway#gateway_ip}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The human readable name of your IPSecGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#name VpnIpsecGateway#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The human-readable description of your IPSec Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#description VpnIpsecGateway#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#id VpnIpsecGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the IPSec Gateway. Supported locations: de/fra, de/txl, es/vit, gb/bhx, gb/lhr, us/ewr, us/las, us/mci, fr/par.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#location VpnIpsecGateway#location}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.maintenanceWindow"></a>

```java
public VpnIpsecGatewayMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow">VpnIpsecGatewayMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#maintenance_window VpnIpsecGateway#maintenance_window}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

Gateway performance options. See the documentation for the available options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#tier VpnIpsecGateway#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.timeouts"></a>

```java
public VpnIpsecGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#timeouts VpnIpsecGateway#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The IKE version that is permitted for the VPN tunnels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#version VpnIpsecGateway#version}

---

### VpnIpsecGatewayConnections <a name="VpnIpsecGatewayConnections" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGatewayConnections;

VpnIpsecGatewayConnections.builder()
    .datacenterId(java.lang.String)
    .ipv4Cidr(java.lang.String)
    .lanId(java.lang.String)
//  .ipv6Cidr(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | The datacenter to connect your VPN Gateway to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv4Cidr">ipv4Cidr</a></code> | <code>java.lang.String</code> | Describes the private ipv4 subnet in your LAN that should be accessible by the VPN Gateway. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.lanId">lanId</a></code> | <code>java.lang.String</code> | The numeric LAN ID to connect your VPN Gateway to. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv6Cidr">ipv6Cidr</a></code> | <code>java.lang.String</code> | Describes the ipv6 subnet in your LAN that should be accessible by the VPN Gateway. |

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

The datacenter to connect your VPN Gateway to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#datacenter_id VpnIpsecGateway#datacenter_id}

---

##### `ipv4Cidr`<sup>Required</sup> <a name="ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv4Cidr"></a>

```java
public java.lang.String getIpv4Cidr();
```

- *Type:* java.lang.String

Describes the private ipv4 subnet in your LAN that should be accessible by the VPN Gateway.

Note: this should be the subnet already assigned to the LAN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#ipv4_cidr VpnIpsecGateway#ipv4_cidr}

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

The numeric LAN ID to connect your VPN Gateway to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#lan_id VpnIpsecGateway#lan_id}

---

##### `ipv6Cidr`<sup>Optional</sup> <a name="ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections.property.ipv6Cidr"></a>

```java
public java.lang.String getIpv6Cidr();
```

- *Type:* java.lang.String

Describes the ipv6 subnet in your LAN that should be accessible by the VPN Gateway.

Note: this should be the subnet already assigned to the LAN

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#ipv6_cidr VpnIpsecGateway#ipv6_cidr}

---

### VpnIpsecGatewayMaintenanceWindow <a name="VpnIpsecGatewayMaintenanceWindow" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGatewayMaintenanceWindow;

VpnIpsecGatewayMaintenanceWindow.builder()
    .dayOfTheWeek(java.lang.String)
    .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>java.lang.String</code> | The name of the week day. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow.property.time">time</a></code> | <code>java.lang.String</code> | Start of the maintenance window in UTC time. |

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow.property.dayOfTheWeek"></a>

```java
public java.lang.String getDayOfTheWeek();
```

- *Type:* java.lang.String

The name of the week day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#day_of_the_week VpnIpsecGateway#day_of_the_week}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

Start of the maintenance window in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#time VpnIpsecGateway#time}

---

### VpnIpsecGatewayTimeouts <a name="VpnIpsecGatewayTimeouts" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGatewayTimeouts;

VpnIpsecGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#create VpnIpsecGateway#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#default VpnIpsecGateway#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#delete VpnIpsecGateway#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#update VpnIpsecGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#create VpnIpsecGateway#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#default VpnIpsecGateway#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#delete VpnIpsecGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/resources/vpn_ipsec_gateway#update VpnIpsecGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpnIpsecGatewayConnectionsList <a name="VpnIpsecGatewayConnectionsList" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGatewayConnectionsList;

new VpnIpsecGatewayConnectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.get"></a>

```java
public VpnIpsecGatewayConnectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>>

---


### VpnIpsecGatewayConnectionsOutputReference <a name="VpnIpsecGatewayConnectionsOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGatewayConnectionsOutputReference;

new VpnIpsecGatewayConnectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resetIpv6Cidr">resetIpv6Cidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv6Cidr` <a name="resetIpv6Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.resetIpv6Cidr"></a>

```java
public void resetIpv6Cidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4CidrInput">ipv4CidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6CidrInput">ipv6CidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanIdInput">lanIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4Cidr">ipv4Cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6Cidr">ipv6Cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanId">lanId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `ipv4CidrInput`<sup>Optional</sup> <a name="ipv4CidrInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4CidrInput"></a>

```java
public java.lang.String getIpv4CidrInput();
```

- *Type:* java.lang.String

---

##### `ipv6CidrInput`<sup>Optional</sup> <a name="ipv6CidrInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6CidrInput"></a>

```java
public java.lang.String getIpv6CidrInput();
```

- *Type:* java.lang.String

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanIdInput"></a>

```java
public java.lang.String getLanIdInput();
```

- *Type:* java.lang.String

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `ipv4Cidr`<sup>Required</sup> <a name="ipv4Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv4Cidr"></a>

```java
public java.lang.String getIpv4Cidr();
```

- *Type:* java.lang.String

---

##### `ipv6Cidr`<sup>Required</sup> <a name="ipv6Cidr" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.ipv6Cidr"></a>

```java
public java.lang.String getIpv6Cidr();
```

- *Type:* java.lang.String

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.lanId"></a>

```java
public java.lang.String getLanId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnectionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayConnections">VpnIpsecGatewayConnections</a>

---


### VpnIpsecGatewayMaintenanceWindowOutputReference <a name="VpnIpsecGatewayMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGatewayMaintenanceWindowOutputReference;

new VpnIpsecGatewayMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.dayOfTheWeekInput">dayOfTheWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow">VpnIpsecGatewayMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfTheWeekInput`<sup>Optional</sup> <a name="dayOfTheWeekInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```java
public java.lang.String getDayOfTheWeekInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```java
public java.lang.String getDayOfTheWeek();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public VpnIpsecGatewayMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayMaintenanceWindow">VpnIpsecGatewayMaintenanceWindow</a>

---


### VpnIpsecGatewayTimeoutsOutputReference <a name="VpnIpsecGatewayTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.vpn_ipsec_gateway.VpnIpsecGatewayTimeoutsOutputReference;

new VpnIpsecGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.vpnIpsecGateway.VpnIpsecGatewayTimeouts">VpnIpsecGatewayTimeouts</a>

---



