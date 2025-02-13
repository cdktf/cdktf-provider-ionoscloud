# `nsgFirewallrule` Submodule <a name="`nsgFirewallrule` Submodule" id="@cdktf/provider-ionoscloud.nsgFirewallrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NsgFirewallrule <a name="NsgFirewallrule" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule ionoscloud_nsg_firewallrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.nsg_firewallrule.NsgFirewallrule;

NsgFirewallrule.Builder.create(Construct scope, java.lang.String id)
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
    .datacenterId(java.lang.String)
    .nsgId(java.lang.String)
    .protocol(java.lang.String)
//  .icmpCode(java.lang.String)
//  .icmpType(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .portRangeEnd(java.lang.Number)
//  .portRangeStart(java.lang.Number)
//  .sourceIp(java.lang.String)
//  .sourceMac(java.lang.String)
//  .targetIp(java.lang.String)
//  .timeouts(NsgFirewallruleTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.nsgId">nsgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.icmpCode">icmpCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.icmpType">icmpType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.portRangeEnd">portRangeEnd</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.portRangeStart">portRangeStart</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.sourceMac">sourceMac</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.targetIp">targetIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}.

---

##### `nsgId`<sup>Required</sup> <a name="nsgId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.nsgId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.icmpCode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.icmpType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}.

---

##### `portRangeEnd`<sup>Optional</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.portRangeEnd"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}.

---

##### `portRangeStart`<sup>Optional</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.portRangeStart"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}.

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.sourceIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}.

---

##### `sourceMac`<sup>Optional</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.sourceMac"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}.

---

##### `targetIp`<sup>Optional</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.targetIp"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#timeouts NsgFirewallrule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeEnd">resetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeStart">resetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceIp">resetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceMac">resetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTargetIp">resetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts"></a>

```java
public void putTimeouts(NsgFirewallruleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

---

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpCode"></a>

```java
public void resetIcmpCode()
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetIcmpType"></a>

```java
public void resetIcmpType()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetName"></a>

```java
public void resetName()
```

##### `resetPortRangeEnd` <a name="resetPortRangeEnd" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeEnd"></a>

```java
public void resetPortRangeEnd()
```

##### `resetPortRangeStart` <a name="resetPortRangeStart" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetPortRangeStart"></a>

```java
public void resetPortRangeStart()
```

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceIp"></a>

```java
public void resetSourceIp()
```

##### `resetSourceMac` <a name="resetSourceMac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetSourceMac"></a>

```java
public void resetSourceMac()
```

##### `resetTargetIp` <a name="resetTargetIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTargetIp"></a>

```java
public void resetTargetIp()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NsgFirewallrule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.nsg_firewallrule.NsgFirewallrule;

NsgFirewallrule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.nsg_firewallrule.NsgFirewallrule;

NsgFirewallrule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.nsg_firewallrule.NsgFirewallrule;

NsgFirewallrule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.nsg_firewallrule.NsgFirewallrule;

NsgFirewallrule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NsgFirewallrule.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NsgFirewallrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NsgFirewallrule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NsgFirewallrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NsgFirewallrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference">NsgFirewallruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCodeInput">icmpCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpTypeInput">icmpTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgIdInput">nsgIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEndInput">portRangeEndInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStartInput">portRangeStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIpInput">sourceIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMacInput">sourceMacInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIpInput">targetIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCode">icmpCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpType">icmpType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgId">nsgId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEnd">portRangeEnd</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStart">portRangeStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMac">sourceMac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIp">targetIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeouts"></a>

```java
public NsgFirewallruleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference">NsgFirewallruleTimeoutsOutputReference</a>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCodeInput"></a>

```java
public java.lang.String getIcmpCodeInput();
```

- *Type:* java.lang.String

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpTypeInput"></a>

```java
public java.lang.String getIcmpTypeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nsgIdInput`<sup>Optional</sup> <a name="nsgIdInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgIdInput"></a>

```java
public java.lang.String getNsgIdInput();
```

- *Type:* java.lang.String

---

##### `portRangeEndInput`<sup>Optional</sup> <a name="portRangeEndInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEndInput"></a>

```java
public java.lang.Number getPortRangeEndInput();
```

- *Type:* java.lang.Number

---

##### `portRangeStartInput`<sup>Optional</sup> <a name="portRangeStartInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStartInput"></a>

```java
public java.lang.Number getPortRangeStartInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIpInput"></a>

```java
public java.lang.String getSourceIpInput();
```

- *Type:* java.lang.String

---

##### `sourceMacInput`<sup>Optional</sup> <a name="sourceMacInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMacInput"></a>

```java
public java.lang.String getSourceMacInput();
```

- *Type:* java.lang.String

---

##### `targetIpInput`<sup>Optional</sup> <a name="targetIpInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIpInput"></a>

```java
public java.lang.String getTargetIpInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpCode"></a>

```java
public java.lang.String getIcmpCode();
```

- *Type:* java.lang.String

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.icmpType"></a>

```java
public java.lang.String getIcmpType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nsgId`<sup>Required</sup> <a name="nsgId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.nsgId"></a>

```java
public java.lang.String getNsgId();
```

- *Type:* java.lang.String

---

##### `portRangeEnd`<sup>Required</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeEnd"></a>

```java
public java.lang.Number getPortRangeEnd();
```

- *Type:* java.lang.Number

---

##### `portRangeStart`<sup>Required</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.portRangeStart"></a>

```java
public java.lang.Number getPortRangeStart();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceIp"></a>

```java
public java.lang.String getSourceIp();
```

- *Type:* java.lang.String

---

##### `sourceMac`<sup>Required</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.sourceMac"></a>

```java
public java.lang.String getSourceMac();
```

- *Type:* java.lang.String

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.targetIp"></a>

```java
public java.lang.String getTargetIp();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallrule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NsgFirewallruleConfig <a name="NsgFirewallruleConfig" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.nsg_firewallrule.NsgFirewallruleConfig;

NsgFirewallruleConfig.builder()
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
    .datacenterId(java.lang.String)
    .nsgId(java.lang.String)
    .protocol(java.lang.String)
//  .icmpCode(java.lang.String)
//  .icmpType(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .portRangeEnd(java.lang.Number)
//  .portRangeStart(java.lang.Number)
//  .sourceIp(java.lang.String)
//  .sourceMac(java.lang.String)
//  .targetIp(java.lang.String)
//  .timeouts(NsgFirewallruleTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.nsgId">nsgId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpCode">icmpCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpType">icmpType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeEnd">portRangeEnd</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeStart">portRangeStart</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceMac">sourceMac</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.targetIp">targetIp</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#datacenter_id NsgFirewallrule#datacenter_id}.

---

##### `nsgId`<sup>Required</sup> <a name="nsgId" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.nsgId"></a>

```java
public java.lang.String getNsgId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#nsg_id NsgFirewallrule#nsg_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#protocol NsgFirewallrule#protocol}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpCode"></a>

```java
public java.lang.String getIcmpCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#icmp_code NsgFirewallrule#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.icmpType"></a>

```java
public java.lang.String getIcmpType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#icmp_type NsgFirewallrule#icmp_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#id NsgFirewallrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#name NsgFirewallrule#name}.

---

##### `portRangeEnd`<sup>Optional</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeEnd"></a>

```java
public java.lang.Number getPortRangeEnd();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#port_range_end NsgFirewallrule#port_range_end}.

---

##### `portRangeStart`<sup>Optional</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.portRangeStart"></a>

```java
public java.lang.Number getPortRangeStart();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#port_range_start NsgFirewallrule#port_range_start}.

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceIp"></a>

```java
public java.lang.String getSourceIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#source_ip NsgFirewallrule#source_ip}.

---

##### `sourceMac`<sup>Optional</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.sourceMac"></a>

```java
public java.lang.String getSourceMac();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#source_mac NsgFirewallrule#source_mac}.

---

##### `targetIp`<sup>Optional</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.targetIp"></a>

```java
public java.lang.String getTargetIp();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#target_ip NsgFirewallrule#target_ip}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.timeouts"></a>

```java
public NsgFirewallruleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#timeouts NsgFirewallrule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#type NsgFirewallrule#type}.

---

### NsgFirewallruleTimeouts <a name="NsgFirewallruleTimeouts" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.nsg_firewallrule.NsgFirewallruleTimeouts;

NsgFirewallruleTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#create NsgFirewallrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#default NsgFirewallrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#delete NsgFirewallrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#update NsgFirewallrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#create NsgFirewallrule#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#default NsgFirewallrule#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#delete NsgFirewallrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.2/docs/resources/nsg_firewallrule#update NsgFirewallrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NsgFirewallruleTimeoutsOutputReference <a name="NsgFirewallruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.nsg_firewallrule.NsgFirewallruleTimeoutsOutputReference;

new NsgFirewallruleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.nsgFirewallrule.NsgFirewallruleTimeouts">NsgFirewallruleTimeouts</a>

---



