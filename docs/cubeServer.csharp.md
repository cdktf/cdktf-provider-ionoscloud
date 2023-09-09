# `ionoscloud_cube_server`

Refer to the Terraform Registory for docs: [`ionoscloud_cube_server`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server).

# `cubeServer` Submodule <a name="`cubeServer` Submodule" id="@cdktf/provider-ionoscloud.cubeServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CubeServer <a name="CubeServer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server ionoscloud_cube_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CubeServer(Construct Scope, string Id, CubeServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig">CubeServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig">CubeServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic">PutNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume">PutVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootCdrom">ResetBootCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootImage">ResetBootImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImagePassword">ResetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSshKeyPath">ResetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutNic` <a name="PutNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic"></a>

```csharp
private void PutNic(CubeServerNic Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts"></a>

```csharp
private void PutTimeouts(CubeServerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

---

##### `PutVolume` <a name="PutVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume"></a>

```csharp
private void PutVolume(CubeServerVolume Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetBootCdrom` <a name="ResetBootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootCdrom"></a>

```csharp
private void ResetBootCdrom()
```

##### `ResetBootImage` <a name="ResetBootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootImage"></a>

```csharp
private void ResetBootImage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImageName"></a>

```csharp
private void ResetImageName()
```

##### `ResetImagePassword` <a name="ResetImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImagePassword"></a>

```csharp
private void ResetImagePassword()
```

##### `ResetSshKeyPath` <a name="ResetSshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSshKeyPath"></a>

```csharp
private void ResetSshKeyPath()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

CubeServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

CubeServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

CubeServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootVolume">BootVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.firewallruleId">FirewallruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nic">Nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference">CubeServerNicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryIp">PrimaryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryNic">PrimaryNic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference">CubeServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference">CubeServerVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdromInput">BootCdromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImageInput">BootImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageNameInput">ImageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePasswordInput">ImagePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nicInput">NicInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPathInput">SshKeyPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuidInput">TemplateUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volumeInput">VolumeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdrom">BootCdrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImage">BootImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageName">ImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePassword">ImagePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPath">SshKeyPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuid">TemplateUuid</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BootVolume`<sup>Required</sup> <a name="BootVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootVolume"></a>

```csharp
public string BootVolume { get; }
```

- *Type:* string

---

##### `FirewallruleId`<sup>Required</sup> <a name="FirewallruleId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.firewallruleId"></a>

```csharp
public string FirewallruleId { get; }
```

- *Type:* string

---

##### `Nic`<sup>Required</sup> <a name="Nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nic"></a>

```csharp
public CubeServerNicOutputReference Nic { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference">CubeServerNicOutputReference</a>

---

##### `PrimaryIp`<sup>Required</sup> <a name="PrimaryIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryIp"></a>

```csharp
public string PrimaryIp { get; }
```

- *Type:* string

---

##### `PrimaryNic`<sup>Required</sup> <a name="PrimaryNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryNic"></a>

```csharp
public string PrimaryNic { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeouts"></a>

```csharp
public CubeServerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference">CubeServerTimeoutsOutputReference</a>

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volume"></a>

```csharp
public CubeServerVolumeOutputReference Volume { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference">CubeServerVolumeOutputReference</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `BootCdromInput`<sup>Optional</sup> <a name="BootCdromInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdromInput"></a>

```csharp
public string BootCdromInput { get; }
```

- *Type:* string

---

##### `BootImageInput`<sup>Optional</sup> <a name="BootImageInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImageInput"></a>

```csharp
public string BootImageInput { get; }
```

- *Type:* string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageNameInput"></a>

```csharp
public string ImageNameInput { get; }
```

- *Type:* string

---

##### `ImagePasswordInput`<sup>Optional</sup> <a name="ImagePasswordInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePasswordInput"></a>

```csharp
public string ImagePasswordInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NicInput`<sup>Optional</sup> <a name="NicInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nicInput"></a>

```csharp
public CubeServerNic NicInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---

##### `SshKeyPathInput`<sup>Optional</sup> <a name="SshKeyPathInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPathInput"></a>

```csharp
public string[] SshKeyPathInput { get; }
```

- *Type:* string[]

---

##### `TemplateUuidInput`<sup>Optional</sup> <a name="TemplateUuidInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuidInput"></a>

```csharp
public string TemplateUuidInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volumeInput"></a>

```csharp
public CubeServerVolume VolumeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `BootCdrom`<sup>Required</sup> <a name="BootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdrom"></a>

```csharp
public string BootCdrom { get; }
```

- *Type:* string

---

##### `BootImage`<sup>Required</sup> <a name="BootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImage"></a>

```csharp
public string BootImage { get; }
```

- *Type:* string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageName"></a>

```csharp
public string ImageName { get; }
```

- *Type:* string

---

##### `ImagePassword`<sup>Required</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePassword"></a>

```csharp
public string ImagePassword { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SshKeyPath`<sup>Required</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPath"></a>

```csharp
public string[] SshKeyPath { get; }
```

- *Type:* string[]

---

##### `TemplateUuid`<sup>Required</sup> <a name="TemplateUuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuid"></a>

```csharp
public string TemplateUuid { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CubeServerConfig <a name="CubeServerConfig" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CubeServerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatacenterId,
    string Name,
    CubeServerNic Nic,
    string TemplateUuid,
    CubeServerVolume Volume,
    string AvailabilityZone = null,
    string BootCdrom = null,
    string BootImage = null,
    string Id = null,
    string ImageName = null,
    string ImagePassword = null,
    string[] SshKeyPath = null,
    CubeServerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.datacenterId">DatacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.nic">Nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.templateUuid">TemplateUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#template_uuid CubeServer#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.volume">Volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootCdrom">BootCdrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootImage">BootImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#boot_image CubeServer#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#id CubeServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imageName">ImageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#image_name CubeServer#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imagePassword">ImagePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.sshKeyPath">SshKeyPath</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#name CubeServer#name}.

---

##### `Nic`<sup>Required</sup> <a name="Nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.nic"></a>

```csharp
public CubeServerNic Nic { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#nic CubeServer#nic}

---

##### `TemplateUuid`<sup>Required</sup> <a name="TemplateUuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.templateUuid"></a>

```csharp
public string TemplateUuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#template_uuid CubeServer#template_uuid}.

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.volume"></a>

```csharp
public CubeServerVolume Volume { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#volume CubeServer#volume}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `BootCdrom`<sup>Optional</sup> <a name="BootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootCdrom"></a>

```csharp
public string BootCdrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}.

---

##### `BootImage`<sup>Optional</sup> <a name="BootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootImage"></a>

```csharp
public string BootImage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#boot_image CubeServer#boot_image}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#id CubeServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imageName"></a>

```csharp
public string ImageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#image_name CubeServer#image_name}.

---

##### `ImagePassword`<sup>Optional</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imagePassword"></a>

```csharp
public string ImagePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `SshKeyPath`<sup>Optional</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.sshKeyPath"></a>

```csharp
public string[] SshKeyPath { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.timeouts"></a>

```csharp
public CubeServerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#timeouts CubeServer#timeouts}

---

### CubeServerNic <a name="CubeServerNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CubeServerNic {
    double Lan,
    object Dhcp = null,
    object Dhcpv6 = null,
    CubeServerNicFirewall Firewall = null,
    object FirewallActive = null,
    string FirewallType = null,
    string[] Ips = null,
    string Ipv6CidrBlock = null,
    string[] Ipv6Ips = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.lan">Lan</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#lan CubeServer#lan}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcp">Dhcp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#dhcp CubeServer#dhcp}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcpv6">Dhcpv6</a></code> | <code>object</code> | Indicates whether this NIC receives an IPv6 address through DHCP. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewall">Firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallActive">FirewallActive</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#firewall_active CubeServer#firewall_active}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallType">FirewallType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#firewall_type CubeServer#firewall_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ips">Ips</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#ips CubeServer#ips}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | IPv6 CIDR block assigned to the NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6Ips">Ipv6Ips</a></code> | <code>string[]</code> | Collection for IPv6 addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#name CubeServer#name}. |

---

##### `Lan`<sup>Required</sup> <a name="Lan" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.lan"></a>

```csharp
public double Lan { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#lan CubeServer#lan}.

---

##### `Dhcp`<sup>Optional</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcp"></a>

```csharp
public object Dhcp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#dhcp CubeServer#dhcp}.

---

##### `Dhcpv6`<sup>Optional</sup> <a name="Dhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcpv6"></a>

```csharp
public object Dhcpv6 { get; set; }
```

- *Type:* object

Indicates whether this NIC receives an IPv6 address through DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#dhcpv6 CubeServer#dhcpv6}

---

##### `Firewall`<sup>Optional</sup> <a name="Firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewall"></a>

```csharp
public CubeServerNicFirewall Firewall { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#firewall CubeServer#firewall}

---

##### `FirewallActive`<sup>Optional</sup> <a name="FirewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallActive"></a>

```csharp
public object FirewallActive { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#firewall_active CubeServer#firewall_active}.

---

##### `FirewallType`<sup>Optional</sup> <a name="FirewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallType"></a>

```csharp
public string FirewallType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#firewall_type CubeServer#firewall_type}.

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ips"></a>

```csharp
public string[] Ips { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#ips CubeServer#ips}.

---

##### `Ipv6CidrBlock`<sup>Optional</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; set; }
```

- *Type:* string

IPv6 CIDR block assigned to the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#ipv6_cidr_block CubeServer#ipv6_cidr_block}

---

##### `Ipv6Ips`<sup>Optional</sup> <a name="Ipv6Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6Ips"></a>

```csharp
public string[] Ipv6Ips { get; set; }
```

- *Type:* string[]

Collection for IPv6 addresses assigned to a nic.

Explicitly assigned IPv6 addresses need to come from inside the IPv6 CIDR block assigned to the nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#ipv6_ips CubeServer#ipv6_ips}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#name CubeServer#name}.

---

### CubeServerNicFirewall <a name="CubeServerNicFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CubeServerNicFirewall {
    string Protocol,
    string IcmpCode = null,
    string IcmpType = null,
    string Name = null,
    double PortRangeEnd = null,
    double PortRangeStart = null,
    string SourceIp = null,
    string SourceMac = null,
    string TargetIp = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.protocol">Protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#protocol CubeServer#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpCode">IcmpCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#icmp_code CubeServer#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpType">IcmpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#icmp_type CubeServer#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeEnd">PortRangeEnd</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#port_range_end CubeServer#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeStart">PortRangeStart</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#port_range_start CubeServer#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceIp">SourceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#source_ip CubeServer#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceMac">SourceMac</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#source_mac CubeServer#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.targetIp">TargetIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#target_ip CubeServer#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#type CubeServer#type}. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#protocol CubeServer#protocol}.

---

##### `IcmpCode`<sup>Optional</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpCode"></a>

```csharp
public string IcmpCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#icmp_code CubeServer#icmp_code}.

---

##### `IcmpType`<sup>Optional</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpType"></a>

```csharp
public string IcmpType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#icmp_type CubeServer#icmp_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#name CubeServer#name}.

---

##### `PortRangeEnd`<sup>Optional</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeEnd"></a>

```csharp
public double PortRangeEnd { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#port_range_end CubeServer#port_range_end}.

---

##### `PortRangeStart`<sup>Optional</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeStart"></a>

```csharp
public double PortRangeStart { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#port_range_start CubeServer#port_range_start}.

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceIp"></a>

```csharp
public string SourceIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#source_ip CubeServer#source_ip}.

---

##### `SourceMac`<sup>Optional</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceMac"></a>

```csharp
public string SourceMac { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#source_mac CubeServer#source_mac}.

---

##### `TargetIp`<sup>Optional</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.targetIp"></a>

```csharp
public string TargetIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#target_ip CubeServer#target_ip}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#type CubeServer#type}.

---

### CubeServerTimeouts <a name="CubeServerTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CubeServerTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#create CubeServer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#default CubeServer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#delete CubeServer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#update CubeServer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#create CubeServer#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#default CubeServer#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#delete CubeServer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#update CubeServer#update}.

---

### CubeServerVolume <a name="CubeServerVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CubeServerVolume {
    string DiskType,
    string AvailabilityZone = null,
    string BackupUnitId = null,
    string Bus = null,
    string ImagePassword = null,
    string LicenceType = null,
    string Name = null,
    string[] SshKeyPath = null,
    string UserData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.diskType">DiskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#disk_type CubeServer#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.backupUnitId">BackupUnitId</a></code> | <code>string</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.bus">Bus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#bus CubeServer#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.imagePassword">ImagePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.licenceType">LicenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#licence_type CubeServer#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.sshKeyPath">SshKeyPath</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.userData">UserData</a></code> | <code>string</code> | The cloud-init configuration for the volume as base64 encoded string. |

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.diskType"></a>

```csharp
public string DiskType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#disk_type CubeServer#disk_type}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `BackupUnitId`<sup>Optional</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.backupUnitId"></a>

```csharp
public string BackupUnitId { get; set; }
```

- *Type:* string

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#backup_unit_id CubeServer#backup_unit_id}

---

##### `Bus`<sup>Optional</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.bus"></a>

```csharp
public string Bus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#bus CubeServer#bus}.

---

##### `ImagePassword`<sup>Optional</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.imagePassword"></a>

```csharp
public string ImagePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `LicenceType`<sup>Optional</sup> <a name="LicenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.licenceType"></a>

```csharp
public string LicenceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#licence_type CubeServer#licence_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#name CubeServer#name}.

---

##### `SshKeyPath`<sup>Optional</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.sshKeyPath"></a>

```csharp
public string[] SshKeyPath { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `UserData`<sup>Optional</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.userData"></a>

```csharp
public string UserData { get; set; }
```

- *Type:* string

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/cube_server#user_data CubeServer#user_data}

---

## Classes <a name="Classes" id="Classes"></a>

### CubeServerNicFirewallOutputReference <a name="CubeServerNicFirewallOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CubeServerNicFirewallOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpCode">ResetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpType">ResetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeEnd">ResetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeStart">ResetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceMac">ResetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetTargetIp">ResetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIcmpCode` <a name="ResetIcmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpCode"></a>

```csharp
private void ResetIcmpCode()
```

##### `ResetIcmpType` <a name="ResetIcmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpType"></a>

```csharp
private void ResetIcmpType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPortRangeEnd` <a name="ResetPortRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeEnd"></a>

```csharp
private void ResetPortRangeEnd()
```

##### `ResetPortRangeStart` <a name="ResetPortRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeStart"></a>

```csharp
private void ResetPortRangeStart()
```

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceIp"></a>

```csharp
private void ResetSourceIp()
```

##### `ResetSourceMac` <a name="ResetSourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceMac"></a>

```csharp
private void ResetSourceMac()
```

##### `ResetTargetIp` <a name="ResetTargetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetTargetIp"></a>

```csharp
private void ResetTargetIp()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCodeInput">IcmpCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpTypeInput">IcmpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEndInput">PortRangeEndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStartInput">PortRangeStartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMacInput">SourceMacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIpInput">TargetIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCode">IcmpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpType">IcmpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEnd">PortRangeEnd</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStart">PortRangeStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIp">SourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMac">SourceMac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIp">TargetIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcmpCodeInput`<sup>Optional</sup> <a name="IcmpCodeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCodeInput"></a>

```csharp
public string IcmpCodeInput { get; }
```

- *Type:* string

---

##### `IcmpTypeInput`<sup>Optional</sup> <a name="IcmpTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpTypeInput"></a>

```csharp
public string IcmpTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PortRangeEndInput`<sup>Optional</sup> <a name="PortRangeEndInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEndInput"></a>

```csharp
public double PortRangeEndInput { get; }
```

- *Type:* double

---

##### `PortRangeStartInput`<sup>Optional</sup> <a name="PortRangeStartInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStartInput"></a>

```csharp
public double PortRangeStartInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIpInput"></a>

```csharp
public string SourceIpInput { get; }
```

- *Type:* string

---

##### `SourceMacInput`<sup>Optional</sup> <a name="SourceMacInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMacInput"></a>

```csharp
public string SourceMacInput { get; }
```

- *Type:* string

---

##### `TargetIpInput`<sup>Optional</sup> <a name="TargetIpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIpInput"></a>

```csharp
public string TargetIpInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `IcmpCode`<sup>Required</sup> <a name="IcmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCode"></a>

```csharp
public string IcmpCode { get; }
```

- *Type:* string

---

##### `IcmpType`<sup>Required</sup> <a name="IcmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpType"></a>

```csharp
public string IcmpType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PortRangeEnd`<sup>Required</sup> <a name="PortRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEnd"></a>

```csharp
public double PortRangeEnd { get; }
```

- *Type:* double

---

##### `PortRangeStart`<sup>Required</sup> <a name="PortRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStart"></a>

```csharp
public double PortRangeStart { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIp"></a>

```csharp
public string SourceIp { get; }
```

- *Type:* string

---

##### `SourceMac`<sup>Required</sup> <a name="SourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMac"></a>

```csharp
public string SourceMac { get; }
```

- *Type:* string

---

##### `TargetIp`<sup>Required</sup> <a name="TargetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIp"></a>

```csharp
public string TargetIp { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.internalValue"></a>

```csharp
public CubeServerNicFirewall InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---


### CubeServerNicOutputReference <a name="CubeServerNicOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CubeServerNicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall">PutFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcp">ResetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcpv6">ResetDhcpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewall">ResetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallActive">ResetFirewallActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallType">ResetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6CidrBlock">ResetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6Ips">ResetIpv6Ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFirewall` <a name="PutFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall"></a>

```csharp
private void PutFirewall(CubeServerNicFirewall Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---

##### `ResetDhcp` <a name="ResetDhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcp"></a>

```csharp
private void ResetDhcp()
```

##### `ResetDhcpv6` <a name="ResetDhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcpv6"></a>

```csharp
private void ResetDhcpv6()
```

##### `ResetFirewall` <a name="ResetFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewall"></a>

```csharp
private void ResetFirewall()
```

##### `ResetFirewallActive` <a name="ResetFirewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallActive"></a>

```csharp
private void ResetFirewallActive()
```

##### `ResetFirewallType` <a name="ResetFirewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallType"></a>

```csharp
private void ResetFirewallType()
```

##### `ResetIps` <a name="ResetIps" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIps"></a>

```csharp
private void ResetIps()
```

##### `ResetIpv6CidrBlock` <a name="ResetIpv6CidrBlock" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6CidrBlock"></a>

```csharp
private void ResetIpv6CidrBlock()
```

##### `ResetIpv6Ips` <a name="ResetIpv6Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6Ips"></a>

```csharp
private void ResetIpv6Ips()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.deviceNumber">DeviceNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewall">Firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference">CubeServerNicFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.mac">Mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.pciSlot">PciSlot</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpInput">DhcpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6Input">Dhcpv6Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActiveInput">FirewallActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallInput">FirewallInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallTypeInput">FirewallTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipsInput">IpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlockInput">Ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6IpsInput">Ipv6IpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lanInput">LanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcp">Dhcp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6">Dhcpv6</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActive">FirewallActive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallType">FirewallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ips">Ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6Ips">Ipv6Ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lan">Lan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceNumber`<sup>Required</sup> <a name="DeviceNumber" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.deviceNumber"></a>

```csharp
public double DeviceNumber { get; }
```

- *Type:* double

---

##### `Firewall`<sup>Required</sup> <a name="Firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewall"></a>

```csharp
public CubeServerNicFirewallOutputReference Firewall { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference">CubeServerNicFirewallOutputReference</a>

---

##### `Mac`<sup>Required</sup> <a name="Mac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.mac"></a>

```csharp
public string Mac { get; }
```

- *Type:* string

---

##### `PciSlot`<sup>Required</sup> <a name="PciSlot" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.pciSlot"></a>

```csharp
public double PciSlot { get; }
```

- *Type:* double

---

##### `DhcpInput`<sup>Optional</sup> <a name="DhcpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpInput"></a>

```csharp
public object DhcpInput { get; }
```

- *Type:* object

---

##### `Dhcpv6Input`<sup>Optional</sup> <a name="Dhcpv6Input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6Input"></a>

```csharp
public object Dhcpv6Input { get; }
```

- *Type:* object

---

##### `FirewallActiveInput`<sup>Optional</sup> <a name="FirewallActiveInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActiveInput"></a>

```csharp
public object FirewallActiveInput { get; }
```

- *Type:* object

---

##### `FirewallInput`<sup>Optional</sup> <a name="FirewallInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallInput"></a>

```csharp
public CubeServerNicFirewall FirewallInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---

##### `FirewallTypeInput`<sup>Optional</sup> <a name="FirewallTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallTypeInput"></a>

```csharp
public string FirewallTypeInput { get; }
```

- *Type:* string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipsInput"></a>

```csharp
public string[] IpsInput { get; }
```

- *Type:* string[]

---

##### `Ipv6CidrBlockInput`<sup>Optional</sup> <a name="Ipv6CidrBlockInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlockInput"></a>

```csharp
public string Ipv6CidrBlockInput { get; }
```

- *Type:* string

---

##### `Ipv6IpsInput`<sup>Optional</sup> <a name="Ipv6IpsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6IpsInput"></a>

```csharp
public string[] Ipv6IpsInput { get; }
```

- *Type:* string[]

---

##### `LanInput`<sup>Optional</sup> <a name="LanInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lanInput"></a>

```csharp
public double LanInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Dhcp`<sup>Required</sup> <a name="Dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcp"></a>

```csharp
public object Dhcp { get; }
```

- *Type:* object

---

##### `Dhcpv6`<sup>Required</sup> <a name="Dhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6"></a>

```csharp
public object Dhcpv6 { get; }
```

- *Type:* object

---

##### `FirewallActive`<sup>Required</sup> <a name="FirewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActive"></a>

```csharp
public object FirewallActive { get; }
```

- *Type:* object

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallType"></a>

```csharp
public string FirewallType { get; }
```

- *Type:* string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ips"></a>

```csharp
public string[] Ips { get; }
```

- *Type:* string[]

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `Ipv6Ips`<sup>Required</sup> <a name="Ipv6Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6Ips"></a>

```csharp
public string[] Ipv6Ips { get; }
```

- *Type:* string[]

---

##### `Lan`<sup>Required</sup> <a name="Lan" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lan"></a>

```csharp
public double Lan { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.internalValue"></a>

```csharp
public CubeServerNic InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---


### CubeServerTimeoutsOutputReference <a name="CubeServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CubeServerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CubeServerVolumeOutputReference <a name="CubeServerVolumeOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CubeServerVolumeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBackupUnitId">ResetBackupUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBus">ResetBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetImagePassword">ResetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetLicenceType">ResetLicenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetSshKeyPath">ResetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetUserData">ResetUserData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetBackupUnitId` <a name="ResetBackupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBackupUnitId"></a>

```csharp
private void ResetBackupUnitId()
```

##### `ResetBus` <a name="ResetBus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBus"></a>

```csharp
private void ResetBus()
```

##### `ResetImagePassword` <a name="ResetImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetImagePassword"></a>

```csharp
private void ResetImagePassword()
```

##### `ResetLicenceType` <a name="ResetLicenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetLicenceType"></a>

```csharp
private void ResetLicenceType()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSshKeyPath` <a name="ResetSshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetSshKeyPath"></a>

```csharp
private void ResetSshKeyPath()
```

##### `ResetUserData` <a name="ResetUserData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetUserData"></a>

```csharp
private void ResetUserData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bootServer">BootServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.cpuHotPlug">CpuHotPlug</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.deviceNumber">DeviceNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotPlug">DiscVirtioHotPlug</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotUnplug">DiscVirtioHotUnplug</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotPlug">NicHotPlug</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotUnplug">NicHotUnplug</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.pciSlot">PciSlot</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.ramHotPlug">RamHotPlug</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitIdInput">BackupUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.busInput">BusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePasswordInput">ImagePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceTypeInput">LicenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPathInput">SshKeyPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userDataInput">UserDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitId">BackupUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bus">Bus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskType">DiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePassword">ImagePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceType">LicenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPath">SshKeyPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userData">UserData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootServer`<sup>Required</sup> <a name="BootServer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bootServer"></a>

```csharp
public string BootServer { get; }
```

- *Type:* string

---

##### `CpuHotPlug`<sup>Required</sup> <a name="CpuHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.cpuHotPlug"></a>

```csharp
public IResolvable CpuHotPlug { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DeviceNumber`<sup>Required</sup> <a name="DeviceNumber" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.deviceNumber"></a>

```csharp
public double DeviceNumber { get; }
```

- *Type:* double

---

##### `DiscVirtioHotPlug`<sup>Required</sup> <a name="DiscVirtioHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotPlug"></a>

```csharp
public IResolvable DiscVirtioHotPlug { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DiscVirtioHotUnplug`<sup>Required</sup> <a name="DiscVirtioHotUnplug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotUnplug"></a>

```csharp
public IResolvable DiscVirtioHotUnplug { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NicHotPlug`<sup>Required</sup> <a name="NicHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotPlug"></a>

```csharp
public IResolvable NicHotPlug { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NicHotUnplug`<sup>Required</sup> <a name="NicHotUnplug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotUnplug"></a>

```csharp
public IResolvable NicHotUnplug { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PciSlot`<sup>Required</sup> <a name="PciSlot" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.pciSlot"></a>

```csharp
public double PciSlot { get; }
```

- *Type:* double

---

##### `RamHotPlug`<sup>Required</sup> <a name="RamHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.ramHotPlug"></a>

```csharp
public IResolvable RamHotPlug { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `BackupUnitIdInput`<sup>Optional</sup> <a name="BackupUnitIdInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitIdInput"></a>

```csharp
public string BackupUnitIdInput { get; }
```

- *Type:* string

---

##### `BusInput`<sup>Optional</sup> <a name="BusInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.busInput"></a>

```csharp
public string BusInput { get; }
```

- *Type:* string

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskTypeInput"></a>

```csharp
public string DiskTypeInput { get; }
```

- *Type:* string

---

##### `ImagePasswordInput`<sup>Optional</sup> <a name="ImagePasswordInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePasswordInput"></a>

```csharp
public string ImagePasswordInput { get; }
```

- *Type:* string

---

##### `LicenceTypeInput`<sup>Optional</sup> <a name="LicenceTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceTypeInput"></a>

```csharp
public string LicenceTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SshKeyPathInput`<sup>Optional</sup> <a name="SshKeyPathInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPathInput"></a>

```csharp
public string[] SshKeyPathInput { get; }
```

- *Type:* string[]

---

##### `UserDataInput`<sup>Optional</sup> <a name="UserDataInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userDataInput"></a>

```csharp
public string UserDataInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `BackupUnitId`<sup>Required</sup> <a name="BackupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitId"></a>

```csharp
public string BackupUnitId { get; }
```

- *Type:* string

---

##### `Bus`<sup>Required</sup> <a name="Bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bus"></a>

```csharp
public string Bus { get; }
```

- *Type:* string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskType"></a>

```csharp
public string DiskType { get; }
```

- *Type:* string

---

##### `ImagePassword`<sup>Required</sup> <a name="ImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePassword"></a>

```csharp
public string ImagePassword { get; }
```

- *Type:* string

---

##### `LicenceType`<sup>Required</sup> <a name="LicenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceType"></a>

```csharp
public string LicenceType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SshKeyPath`<sup>Required</sup> <a name="SshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPath"></a>

```csharp
public string[] SshKeyPath { get; }
```

- *Type:* string[]

---

##### `UserData`<sup>Required</sup> <a name="UserData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userData"></a>

```csharp
public string UserData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.internalValue"></a>

```csharp
public CubeServerVolume InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---



