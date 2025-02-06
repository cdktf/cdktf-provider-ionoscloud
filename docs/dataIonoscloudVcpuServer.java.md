# `dataIonoscloudVcpuServer` Submodule <a name="`dataIonoscloudVcpuServer` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudVcpuServer <a name="DataIonoscloudVcpuServer" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server ionoscloud_vcpu_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServer;

DataIonoscloudVcpuServer.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .timeouts(DataIonoscloudVcpuServerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#datacenter_id DataIonoscloudVcpuServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#id DataIonoscloudVcpuServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#name DataIonoscloudVcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts">DataIonoscloudVcpuServerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.datacenterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#datacenter_id DataIonoscloudVcpuServer#datacenter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#id DataIonoscloudVcpuServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#name DataIonoscloudVcpuServer#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts">DataIonoscloudVcpuServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#timeouts DataIonoscloudVcpuServer#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.putTimeouts"></a>

```java
public void putTimeouts(DataIonoscloudVcpuServerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts">DataIonoscloudVcpuServerTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.resetName"></a>

```java
public void resetName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudVcpuServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServer;

DataIonoscloudVcpuServer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServer;

DataIonoscloudVcpuServer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServer;

DataIonoscloudVcpuServer.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServer;

DataIonoscloudVcpuServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataIonoscloudVcpuServer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataIonoscloudVcpuServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataIonoscloudVcpuServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataIonoscloudVcpuServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudVcpuServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.bootCdrom">bootCdrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.bootImage">bootImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.bootVolume">bootVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.cdroms">cdroms</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList">DataIonoscloudVcpuServerCdromsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.cores">cores</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.cpuFamily">cpuFamily</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.labels">labels</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList">DataIonoscloudVcpuServerLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.nics">nics</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList">DataIonoscloudVcpuServerNicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.ram">ram</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.securityGroupsIds">securityGroupsIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference">DataIonoscloudVcpuServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.vmState">vmState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList">DataIonoscloudVcpuServerVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.datacenterIdInput">datacenterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts">DataIonoscloudVcpuServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `bootCdrom`<sup>Required</sup> <a name="bootCdrom" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.bootCdrom"></a>

```java
public java.lang.String getBootCdrom();
```

- *Type:* java.lang.String

---

##### `bootImage`<sup>Required</sup> <a name="bootImage" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.bootImage"></a>

```java
public java.lang.String getBootImage();
```

- *Type:* java.lang.String

---

##### `bootVolume`<sup>Required</sup> <a name="bootVolume" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.bootVolume"></a>

```java
public java.lang.String getBootVolume();
```

- *Type:* java.lang.String

---

##### `cdroms`<sup>Required</sup> <a name="cdroms" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.cdroms"></a>

```java
public DataIonoscloudVcpuServerCdromsList getCdroms();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList">DataIonoscloudVcpuServerCdromsList</a>

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.cores"></a>

```java
public java.lang.Number getCores();
```

- *Type:* java.lang.Number

---

##### `cpuFamily`<sup>Required</sup> <a name="cpuFamily" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.cpuFamily"></a>

```java
public java.lang.String getCpuFamily();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.labels"></a>

```java
public DataIonoscloudVcpuServerLabelsList getLabels();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList">DataIonoscloudVcpuServerLabelsList</a>

---

##### `nics`<sup>Required</sup> <a name="nics" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.nics"></a>

```java
public DataIonoscloudVcpuServerNicsList getNics();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList">DataIonoscloudVcpuServerNicsList</a>

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.ram"></a>

```java
public java.lang.Number getRam();
```

- *Type:* java.lang.Number

---

##### `securityGroupsIds`<sup>Required</sup> <a name="securityGroupsIds" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.securityGroupsIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.timeouts"></a>

```java
public DataIonoscloudVcpuServerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference">DataIonoscloudVcpuServerTimeoutsOutputReference</a>

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vmState`<sup>Required</sup> <a name="vmState" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.vmState"></a>

```java
public java.lang.String getVmState();
```

- *Type:* java.lang.String

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.volumes"></a>

```java
public DataIonoscloudVcpuServerVolumesList getVolumes();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList">DataIonoscloudVcpuServerVolumesList</a>

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.datacenterIdInput"></a>

```java
public java.lang.String getDatacenterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts">DataIonoscloudVcpuServerTimeouts</a>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudVcpuServerCdroms <a name="DataIonoscloudVcpuServerCdroms" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdroms"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdroms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerCdroms;

DataIonoscloudVcpuServerCdroms.builder()
    .build();
```


### DataIonoscloudVcpuServerConfig <a name="DataIonoscloudVcpuServerConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerConfig;

DataIonoscloudVcpuServerConfig.builder()
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
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .timeouts(DataIonoscloudVcpuServerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.datacenterId">datacenterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#datacenter_id DataIonoscloudVcpuServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#id DataIonoscloudVcpuServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#name DataIonoscloudVcpuServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts">DataIonoscloudVcpuServerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.datacenterId"></a>

```java
public java.lang.String getDatacenterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#datacenter_id DataIonoscloudVcpuServer#datacenter_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#id DataIonoscloudVcpuServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#name DataIonoscloudVcpuServer#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerConfig.property.timeouts"></a>

```java
public DataIonoscloudVcpuServerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts">DataIonoscloudVcpuServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#timeouts DataIonoscloudVcpuServer#timeouts}

---

### DataIonoscloudVcpuServerLabels <a name="DataIonoscloudVcpuServerLabels" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabels.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerLabels;

DataIonoscloudVcpuServerLabels.builder()
    .build();
```


### DataIonoscloudVcpuServerNics <a name="DataIonoscloudVcpuServerNics" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerNics;

DataIonoscloudVcpuServerNics.builder()
    .build();
```


### DataIonoscloudVcpuServerNicsFirewallRules <a name="DataIonoscloudVcpuServerNicsFirewallRules" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerNicsFirewallRules;

DataIonoscloudVcpuServerNicsFirewallRules.builder()
    .build();
```


### DataIonoscloudVcpuServerTimeouts <a name="DataIonoscloudVcpuServerTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerTimeouts;

DataIonoscloudVcpuServerTimeouts.builder()
//  .create(java.lang.String)
//  .default(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#create DataIonoscloudVcpuServer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts.property.default">default</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#default DataIonoscloudVcpuServer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#delete DataIonoscloudVcpuServer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#update DataIonoscloudVcpuServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#create DataIonoscloudVcpuServer#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#default DataIonoscloudVcpuServer#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#delete DataIonoscloudVcpuServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.1/docs/data-sources/vcpu_server#update DataIonoscloudVcpuServer#update}.

---

### DataIonoscloudVcpuServerVolumes <a name="DataIonoscloudVcpuServerVolumes" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerVolumes;

DataIonoscloudVcpuServerVolumes.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudVcpuServerCdromsList <a name="DataIonoscloudVcpuServerCdromsList" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerCdromsList;

new DataIonoscloudVcpuServerCdromsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.get"></a>

```java
public DataIonoscloudVcpuServerCdromsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataIonoscloudVcpuServerCdromsOutputReference <a name="DataIonoscloudVcpuServerCdromsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerCdromsOutputReference;

new DataIonoscloudVcpuServerCdromsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.cloudInit">cloudInit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.cpuHotPlug">cpuHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.cpuHotUnplug">cpuHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.discScsiHotPlug">discScsiHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.discScsiHotUnplug">discScsiHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.discVirtioHotPlug">discVirtioHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.discVirtioHotUnplug">discVirtioHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.imageAliases">imageAliases</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.imageType">imageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.licenceType">licenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.nicHotPlug">nicHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.nicHotUnplug">nicHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.public">public</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.ramHotPlug">ramHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.ramHotUnplug">ramHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdroms">DataIonoscloudVcpuServerCdroms</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudInit`<sup>Required</sup> <a name="cloudInit" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.cloudInit"></a>

```java
public java.lang.String getCloudInit();
```

- *Type:* java.lang.String

---

##### `cpuHotPlug`<sup>Required</sup> <a name="cpuHotPlug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.cpuHotPlug"></a>

```java
public IResolvable getCpuHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `cpuHotUnplug`<sup>Required</sup> <a name="cpuHotUnplug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.cpuHotUnplug"></a>

```java
public IResolvable getCpuHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discScsiHotPlug`<sup>Required</sup> <a name="discScsiHotPlug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.discScsiHotPlug"></a>

```java
public IResolvable getDiscScsiHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `discScsiHotUnplug`<sup>Required</sup> <a name="discScsiHotUnplug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.discScsiHotUnplug"></a>

```java
public IResolvable getDiscScsiHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `discVirtioHotPlug`<sup>Required</sup> <a name="discVirtioHotPlug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.discVirtioHotPlug"></a>

```java
public IResolvable getDiscVirtioHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `discVirtioHotUnplug`<sup>Required</sup> <a name="discVirtioHotUnplug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.discVirtioHotUnplug"></a>

```java
public IResolvable getDiscVirtioHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageAliases`<sup>Required</sup> <a name="imageAliases" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.imageAliases"></a>

```java
public java.util.List<java.lang.String> getImageAliases();
```

- *Type:* java.util.List<java.lang.String>

---

##### `imageType`<sup>Required</sup> <a name="imageType" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.imageType"></a>

```java
public java.lang.String getImageType();
```

- *Type:* java.lang.String

---

##### `licenceType`<sup>Required</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.licenceType"></a>

```java
public java.lang.String getLicenceType();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nicHotPlug`<sup>Required</sup> <a name="nicHotPlug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.nicHotPlug"></a>

```java
public IResolvable getNicHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nicHotUnplug`<sup>Required</sup> <a name="nicHotUnplug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.nicHotUnplug"></a>

```java
public IResolvable getNicHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.public"></a>

```java
public IResolvable getPublic();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ramHotPlug`<sup>Required</sup> <a name="ramHotPlug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.ramHotPlug"></a>

```java
public IResolvable getRamHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `ramHotUnplug`<sup>Required</sup> <a name="ramHotUnplug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.ramHotUnplug"></a>

```java
public IResolvable getRamHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdromsOutputReference.property.internalValue"></a>

```java
public DataIonoscloudVcpuServerCdroms getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerCdroms">DataIonoscloudVcpuServerCdroms</a>

---


### DataIonoscloudVcpuServerLabelsList <a name="DataIonoscloudVcpuServerLabelsList" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerLabelsList;

new DataIonoscloudVcpuServerLabelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.get"></a>

```java
public DataIonoscloudVcpuServerLabelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataIonoscloudVcpuServerLabelsOutputReference <a name="DataIonoscloudVcpuServerLabelsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerLabelsOutputReference;

new DataIonoscloudVcpuServerLabelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabels">DataIonoscloudVcpuServerLabels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabelsOutputReference.property.internalValue"></a>

```java
public DataIonoscloudVcpuServerLabels getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerLabels">DataIonoscloudVcpuServerLabels</a>

---


### DataIonoscloudVcpuServerNicsFirewallRulesList <a name="DataIonoscloudVcpuServerNicsFirewallRulesList" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerNicsFirewallRulesList;

new DataIonoscloudVcpuServerNicsFirewallRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.get"></a>

```java
public DataIonoscloudVcpuServerNicsFirewallRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataIonoscloudVcpuServerNicsFirewallRulesOutputReference <a name="DataIonoscloudVcpuServerNicsFirewallRulesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference;

new DataIonoscloudVcpuServerNicsFirewallRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.icmpCode">icmpCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.icmpType">icmpType</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.portRangeEnd">portRangeEnd</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.portRangeStart">portRangeStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.sourceIp">sourceIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.sourceMac">sourceMac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.targetIp">targetIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRules">DataIonoscloudVcpuServerNicsFirewallRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.icmpCode"></a>

```java
public java.lang.Number getIcmpCode();
```

- *Type:* java.lang.Number

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.icmpType"></a>

```java
public java.lang.Number getIcmpType();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `portRangeEnd`<sup>Required</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.portRangeEnd"></a>

```java
public java.lang.Number getPortRangeEnd();
```

- *Type:* java.lang.Number

---

##### `portRangeStart`<sup>Required</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.portRangeStart"></a>

```java
public java.lang.Number getPortRangeStart();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.sourceIp"></a>

```java
public java.lang.String getSourceIp();
```

- *Type:* java.lang.String

---

##### `sourceMac`<sup>Required</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.sourceMac"></a>

```java
public java.lang.String getSourceMac();
```

- *Type:* java.lang.String

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.targetIp"></a>

```java
public java.lang.String getTargetIp();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesOutputReference.property.internalValue"></a>

```java
public DataIonoscloudVcpuServerNicsFirewallRules getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRules">DataIonoscloudVcpuServerNicsFirewallRules</a>

---


### DataIonoscloudVcpuServerNicsList <a name="DataIonoscloudVcpuServerNicsList" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerNicsList;

new DataIonoscloudVcpuServerNicsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.get"></a>

```java
public DataIonoscloudVcpuServerNicsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataIonoscloudVcpuServerNicsOutputReference <a name="DataIonoscloudVcpuServerNicsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerNicsOutputReference;

new DataIonoscloudVcpuServerNicsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.deviceNumber">deviceNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.dhcp">dhcp</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.dhcpv6">dhcpv6</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.firewallActive">firewallActive</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.firewallRules">firewallRules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList">DataIonoscloudVcpuServerNicsFirewallRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.firewallType">firewallType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.ips">ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.ipv6Ips">ipv6Ips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.lan">lan</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.mac">mac</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.pciSlot">pciSlot</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.securityGroupsIds">securityGroupsIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNics">DataIonoscloudVcpuServerNics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceNumber`<sup>Required</sup> <a name="deviceNumber" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.deviceNumber"></a>

```java
public java.lang.Number getDeviceNumber();
```

- *Type:* java.lang.Number

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.dhcp"></a>

```java
public IResolvable getDhcp();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `dhcpv6`<sup>Required</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.dhcpv6"></a>

```java
public IResolvable getDhcpv6();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `firewallActive`<sup>Required</sup> <a name="firewallActive" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.firewallActive"></a>

```java
public IResolvable getFirewallActive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `firewallRules`<sup>Required</sup> <a name="firewallRules" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.firewallRules"></a>

```java
public DataIonoscloudVcpuServerNicsFirewallRulesList getFirewallRules();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsFirewallRulesList">DataIonoscloudVcpuServerNicsFirewallRulesList</a>

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.firewallType"></a>

```java
public java.lang.String getFirewallType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.ips"></a>

```java
public java.util.List<java.lang.String> getIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.ipv6CidrBlock"></a>

```java
public java.lang.String getIpv6CidrBlock();
```

- *Type:* java.lang.String

---

##### `ipv6Ips`<sup>Required</sup> <a name="ipv6Ips" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.ipv6Ips"></a>

```java
public java.util.List<java.lang.String> getIpv6Ips();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.lan"></a>

```java
public java.lang.Number getLan();
```

- *Type:* java.lang.Number

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.mac"></a>

```java
public java.lang.String getMac();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pciSlot`<sup>Required</sup> <a name="pciSlot" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.pciSlot"></a>

```java
public java.lang.Number getPciSlot();
```

- *Type:* java.lang.Number

---

##### `securityGroupsIds`<sup>Required</sup> <a name="securityGroupsIds" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.securityGroupsIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNicsOutputReference.property.internalValue"></a>

```java
public DataIonoscloudVcpuServerNics getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerNics">DataIonoscloudVcpuServerNics</a>

---


### DataIonoscloudVcpuServerTimeoutsOutputReference <a name="DataIonoscloudVcpuServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerTimeoutsOutputReference;

new DataIonoscloudVcpuServerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.resetDefault"></a>

```java
public void resetDefault()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts">DataIonoscloudVcpuServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.defaultInput"></a>

```java
public java.lang.String getDefaultInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerTimeouts">DataIonoscloudVcpuServerTimeouts</a>

---


### DataIonoscloudVcpuServerVolumesList <a name="DataIonoscloudVcpuServerVolumesList" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerVolumesList;

new DataIonoscloudVcpuServerVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.get"></a>

```java
public DataIonoscloudVcpuServerVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataIonoscloudVcpuServerVolumesOutputReference <a name="DataIonoscloudVcpuServerVolumesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.ionoscloud.data_ionoscloud_vcpu_server.DataIonoscloudVcpuServerVolumesOutputReference;

new DataIonoscloudVcpuServerVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.backupUnitId">backupUnitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.bootServer">bootServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.bus">bus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.cpuHotPlug">cpuHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.deviceNumber">deviceNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.discVirtioHotPlug">discVirtioHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.discVirtioHotUnplug">discVirtioHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.imagePassword">imagePassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.licenceType">licenceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.nicHotPlug">nicHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.nicHotUnplug">nicHotUnplug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.pciSlot">pciSlot</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.ramHotPlug">ramHotPlug</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.userData">userData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumes">DataIonoscloudVcpuServerVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `backupUnitId`<sup>Required</sup> <a name="backupUnitId" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.backupUnitId"></a>

```java
public java.lang.String getBackupUnitId();
```

- *Type:* java.lang.String

---

##### `bootServer`<sup>Required</sup> <a name="bootServer" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.bootServer"></a>

```java
public java.lang.String getBootServer();
```

- *Type:* java.lang.String

---

##### `bus`<sup>Required</sup> <a name="bus" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.bus"></a>

```java
public java.lang.String getBus();
```

- *Type:* java.lang.String

---

##### `cpuHotPlug`<sup>Required</sup> <a name="cpuHotPlug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.cpuHotPlug"></a>

```java
public IResolvable getCpuHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `deviceNumber`<sup>Required</sup> <a name="deviceNumber" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.deviceNumber"></a>

```java
public java.lang.Number getDeviceNumber();
```

- *Type:* java.lang.Number

---

##### `discVirtioHotPlug`<sup>Required</sup> <a name="discVirtioHotPlug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.discVirtioHotPlug"></a>

```java
public IResolvable getDiscVirtioHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `discVirtioHotUnplug`<sup>Required</sup> <a name="discVirtioHotUnplug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.discVirtioHotUnplug"></a>

```java
public IResolvable getDiscVirtioHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imagePassword`<sup>Required</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.imagePassword"></a>

```java
public java.lang.String getImagePassword();
```

- *Type:* java.lang.String

---

##### `licenceType`<sup>Required</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.licenceType"></a>

```java
public java.lang.String getLicenceType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nicHotPlug`<sup>Required</sup> <a name="nicHotPlug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.nicHotPlug"></a>

```java
public IResolvable getNicHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `nicHotUnplug`<sup>Required</sup> <a name="nicHotUnplug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.nicHotUnplug"></a>

```java
public IResolvable getNicHotUnplug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `pciSlot`<sup>Required</sup> <a name="pciSlot" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.pciSlot"></a>

```java
public java.lang.Number getPciSlot();
```

- *Type:* java.lang.Number

---

##### `ramHotPlug`<sup>Required</sup> <a name="ramHotPlug" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.ramHotPlug"></a>

```java
public IResolvable getRamHotPlug();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.userData"></a>

```java
public java.lang.String getUserData();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumesOutputReference.property.internalValue"></a>

```java
public DataIonoscloudVcpuServerVolumes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudVcpuServer.DataIonoscloudVcpuServerVolumes">DataIonoscloudVcpuServerVolumes</a>

---



